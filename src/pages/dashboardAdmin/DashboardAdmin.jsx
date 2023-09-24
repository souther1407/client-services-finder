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
const MAX_REQUEST = 10;
const DashboardAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProfessionalInput, setNewProfessionalInput] = useState({
    name: "",
    types: [],
    locations: [],
    phone: "",
  });
  const [page, setPage] = useState(1);

  const handleChangeChecked = async (id, newValue) => {
    try {
      setLoading(true);
      await update(id, { checked: newValue });
      setRequests([
        ...requests.map((r) => (r.id === id ? { ...r, checked: newValue } : r)),
      ]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [detailRequest, setDetailRequest] = useState(null);

  useEffect(() => {
    getAll(MAX_REQUEST, page)
      .then((response) => setRequests(response.results))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }, []);

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
            {requests.map((m) => (
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
              Telefono del profesional requerido:{" "}
              {detailRequest.professionalPhoneNumbers[0]}
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
