import React from "react";
import styles from "./dashboardProfesionales.module.css";
const DashboardProfesionales = () => {
  return (
    <div className={styles.dashboard}>
      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ignacio Lestrada</td>
            <td>btn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardProfesionales;
