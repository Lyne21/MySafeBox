import React, { useContext } from "react"
import Layout from "../components/Layout"
import { docsInfo } from "../datas/docInfo"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"
import { DocsContext } from "../components/DocsContext"

function GestionDocuments() {
  const { activeDocs, search } = useContext(DocsContext)

  return (
    <Layout docs={docsInfo}>
      <div>
        <div className="custom-bar">
          <button className="general-btn">Ajouter fichier zip</button>
          <button className="general-btn">Ajouter fichier csv</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {activeDocs.length ? (
        <>
          <TabHead
            col1={"Titre & classe"}
            col2="Dernière date d'éxécution"
            lines={docsInfo.map(({ id }) => id)}
          />
          {activeDocs.map(
            (doc, idx) =>
              (!search ||
                doc.name.toLowerCase().includes(search.toLowerCase())) && (
                <TabLine {...doc} share users={[{name: 'AQUEBIROU FRANCISCO'}]} gestion key={idx} />
              )
          )}
        </>
      ) : (
        <div className="no-doc">
          Aucun dossier partagé . Les dossiers partagés vous permettent de
          partagés des documents stockés dans votre coffre fort avec une ou
          plusieurs personnes de votre choix .<br />
          <br /> Vous pouvez décider qui a accès à vos documents et pour combien
          de temps .
        </div>
      )}
    </Layout>
  )
}

export default GestionDocuments
