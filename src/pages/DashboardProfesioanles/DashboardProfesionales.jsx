import React, { useEffect, useState } from "react";
import styles from "./dashboardProfesionales.module.css";
import {
  getAllProfessionals,
  deleteOneProfessional,
} from "../../services/professionalsApi";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const DashboardProfesionales = () => {
  const [loading, setLoading] = useState(true);
  const [professionals, setProfessionals] = useState([]);
  const [pagination, setPaginator] = useState({
    cant: 10,
    page: 1,
    totalElements: 0,
  });
  useEffect(() => {
    setLoading(true);
    getAllProfessionals(pagination.cant, pagination.page)
      .then((data) => {
        setPaginator((prev) => ({ ...prev, totalElements: data.total }));
        setProfessionals(data.results);
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [pagination.page]);

  const handleDelete = async (id) => {
    const confirmation = await MySwal.fire({
      titleText: "Cuidado!",
      text: "Estas seguro?",
      confirmButtonText: "Si",
      showDenyButton: true,
    });

    if (confirmation.isDenied) return;
    let msg = "Listo!";
    try {
      setLoading(true);
      await deleteOneProfessional(id);
      setProfessionals((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      msg = error.message;
    } finally {
      setLoading(false);
      alert(msg);
    }
  };

  const calcTotalPages = () => {
    return Math.ceil(pagination.totalElements / pagination.cant);
  };
  const antPage = () => {
    if (pagination.page === 1) return;
    setPaginator((prev) => ({ ...prev, page: prev.page - 1 }));
  };
  const nextPage = () => {
    if (pagination.page === calcTotalPages()) return;
    setPaginator((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  return (
    <div className={styles.dashboard}>
      {loading && <LoadingScreen />}
      {(!loading || professionals.length != 0) && (
        <>
          <table className={styles.tabla}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {professionals.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>
                    <button onClick={() => handleDelete(p.id)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className={styles.tableFooter}>
              <button
                disabled={pagination.page === 1}
                onClick={antPage}
                className={styles.btn}
              >
                {"<"}
              </button>
              <button
                disabled={pagination.page === calcTotalPages()}
                onClick={nextPage}
                className={styles.btn}
              >
                {">"}
              </button>
            </tfoot>
          </table>
          <p>
            Pagina {pagination.page} de {calcTotalPages()}
          </p>
        </>
      )}
    </div>
  );
};

export default DashboardProfesionales;
