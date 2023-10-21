import React, { useEffect, useState } from "react";
import styles from "./dashboardAdmin.module.css";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import { getAll, update } from "../../services/serviceRequest.js";
import { create } from "../../services/professionalsApi";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import MultiValueSelect from "../../components/molecules/MultiValueSelect/MultiValueSelect";
import { SERVICES } from "../../utils/constants/services";
import { LOCATION } from "../../utils/constants/locations";
import IconButton from "../../components/molecules/IconButton/IconButton";

const DashboardAdmin = () => {
  const [requests, setRequests] = useState([]);
  const MAX_REQUEST = 10;
  const [loading, setLoading] = useState(true);
  const [newProfessionalInput, setNewProfessionalInput] = useState({
    name: "",
    types: [],
    locations: [],
    phone: "",
  });
  const [paginator, setPaginator] = useState({
    page: 1,
    totalRequests: 0,
  });
  const handleChangeChecked = async (id, newValue) => {
    try {
      setLoading(true);
      await update(id, { checked: newValue });
      setRequests((prev) => [
        ...prev.map((r) => (r.id === id ? { ...r, checked: newValue } : r)),
      ]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [detailRequest, setDetailRequest] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAll(MAX_REQUEST, paginator.page)
      .then((response) => {
        setRequests(response.results);
        setPaginator({
          page: paginator.page,
          totalRequests: response.total,
        });
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }, [paginator.page]);

  const handleSelectRequest = (request) => {
    setDetailRequest(request);
  };
  const handleChange = (id, value) => {
    setNewProfessionalInput((prev) => ({ ...prev, [id]: value }));
  };
  const handleAddProfessional = async () => {
    try {
      setLoading(true);
      await create(newProfessionalInput);
      alert("Creado!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (paginator.page === Math.ceil(paginator.totalRequests / MAX_REQUEST))
      return;
    setPaginator((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleAntPage = () => {
    if (paginator.page === 1) return;
    setPaginator((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  return (
    <div className={styles.dashboardAdmin}>
      {loading && <LoadingScreen />}
      <section className={styles.createProfessional}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddProfessional();
          }}
        >
          <div className={styles.input}>
            <Text>Nombre</Text>
            <Input id={"name"} onChange={handleChange} />
          </div>
          <div className={styles.input}>
            <Text>Servicios(s)</Text>
            {/* <Input id={"types"} onChange={handleChange} /> */}
            <MultiValueSelect
              id={"types"}
              elements={SERVICES}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <Text>Distrito(s)</Text>
            <MultiValueSelect
              id={"locations"}
              elements={LOCATION}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <Text>Número</Text>
            <Input id={"phone"} onChange={handleChange} />
          </div>
          <IconTextButton variant="bordered">
            Agregar profesional
          </IconTextButton>
        </form>
      </section>
      <section className={styles.listResquests}>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Distrito</th>
              <th>Servicio</th>
              <th>Visto</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((m) => (
              <tr
                className={styles.request}
                key={m.id}
                onClick={() => handleSelectRequest(m)}
              >
                <td>{m.firstName + " " + m.lastName}</td>
                <td>{m.location}</td>
                <td>{m.type}</td>
                <td>{m.checked && "SI"}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className={styles.tablePaginator}>
            <tr>
              <td colSpan={"3"}>
                <Text>
                  Página {paginator.page} de{" "}
                  {Math.ceil(paginator.totalRequests / MAX_REQUEST)}
                </Text>
              </td>
              <td>
                <div className={styles.paginatorBtns}>
                  <IconButton
                    size={"32px"}
                    icon="singleArrowLeft"
                    onClick={handleAntPage}
                  />
                  <IconButton
                    size={"32px"}
                    icon="singleArrowRight"
                    onClick={handleNextPage}
                  />
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        {detailRequest && (
          <div className={styles.requestDetail}>
            <Text>
              Nombre cliente:{" "}
              {`${detailRequest.firstName} ${detailRequest.lastName}`}
            </Text>
            <Text>Servicio requerido: {`${detailRequest.type}`}</Text>
            <Text>Distrito: {`${detailRequest.location}`}</Text>
            <Text>Número cliente: {`${detailRequest.contactPhone}`}</Text>
            <Text>
              Descripción del trabajo: {`${detailRequest.description}`}
            </Text>
            <Text>
              Teléfono del profesional/es requerido/s:{" "}
              {detailRequest.professionalPhoneNumbers.join(",")}
            </Text>
            <IconTextButton
              variant="bordered"
              size="100%"
              onClick={() => handleChangeChecked(detailRequest.id, true)}
            >
              Check
            </IconTextButton>
          </div>
        )}
      </section>
    </div>
  );
};

export default DashboardAdmin;
