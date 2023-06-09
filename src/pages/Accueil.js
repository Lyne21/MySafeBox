import React, { useContext } from "react"
import Box from "../components/Box"
import { DocsContext } from "../components/DocsContext"
import Layout from "../components/Layout"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"
import { docsInfo } from "../datas/docInfo.js"
import Connexion from "./Connexion"
import "../styles/Accueil.css"

function Accueil() {
  const docs = docsInfo.slice(0, 3)

  const { activeDocs, search, logged } = useContext(DocsContext)

  return (
    <>
      {!logged ? (
        <Connexion />
      ) : (
        <Layout docs={docs}>
          <div className="Accueil">
            <div className="box-container">
              <Box
                color={"rgba(41, 181, 211, 0.56)"}
                type={"people"}
                value={50}
                description={"Employes"}
              />
              <Box
                color={"rgba(99, 42, 192, 0.44)"}
                type={"folder"}
                value={50}
                description="Documents"
              />
              <Box
                color="rgba(19, 100, 42, 0.44)"
                type="calendar"
                value="01/05/22"
                description="Derniers partages"
              />
            </div>

            <p className="tab-description">Documents recents</p>
            <TabHead
              col1={"Documents"}
              col2="Dernière date de changement"
              lines={docs.map((doc) => doc.id)}
              background
            />
            {activeDocs.map(
              (doc, idx) =>
                (!search ||
                  doc.name.toLowerCase().includes(search.toLowerCase())) && (
                  <TabLine
                    key={idx}
                    date={doc.date}
                    type={doc.type}
                    name={doc.name}
                    id={doc.id}
                    background
                  />
                )
            )}
          </div>
        </Layout>
      )}
    </>
  )
}

export default Accueil
