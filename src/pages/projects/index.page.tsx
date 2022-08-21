import { NextSeo } from "next-seo";
import { useFetchp } from "fetchp";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";

const ProjectList = function ProjectList() {
  const { data, isLoading, error } = useFetchp(
    "GET",
    "https://api.github.com/search/repositories?q=topic:acikkaynak",
  );

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <ul>
      {data?.items?.map((item) => (
        <li key={item.id}>
          <a href={item.html_url}>{item.full_name}</a>: {item.description}
        </li>
      ))}
    </ul>
  );
};

const Projects: CustomPage = function Projects() {
  return (
    <>
      <NextSeo title="Projeler" />

      <section className={styles.section}>
        <h1>Projeler</h1>

        <ProjectList />
      </section>
    </>
  );
};

export { Projects, Projects as default };