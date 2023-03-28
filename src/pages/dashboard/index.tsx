import { useState, useEffect } from "react";
import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../layouts/ProjectOwnerLayout";
import ProjectOwnerHome from "../../components/Dashboard/ProjectOwner/Home/Home";

export default function Dashboard() {
  return <ProjectOwnerHome />;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};