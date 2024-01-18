"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APIList, Workspace } from "@/lib/types";
import { useEffect, useState } from "react";

const WorkspacePage = () => {
  const [data, setData] = useState<APIList>();
  const [workspaces, setWorkspaces] = useState<Workspace[]>();
  const myToke =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVwaWMiLCJuYW1laWQiOiI5ZGVjOThmOC0xYjMzLTQ2YzktYTFhMC0zY2UwYTU0YWY4NzQiLCJlbWFpbCI6InRoZXRlY2hlcGljQGdtYWlsLmNvbSIsIm5iZiI6MTcwNTMxMDA0NSwiZXhwIjoxNzA1OTE0ODQ1LCJpYXQiOjE3MDUzMTAwNDUsImlzcyI6Imh0dHBzOi8vYmx1YXBpLWR3d3pxc3BmNnEtdWMuYS5ydW4uYXBwIn0.bxVE61ue7pTw27VBWKK3iaMtO3Z8qp8BywiW3zeR369VwF8yt204zeqLVy-QdwGAaP_QF3D5HKlLMA-G6IeaPQ";

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://bluapi-dwwzqspf6q-uc.a.run.app/api/Workspace`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + myToke,
          },
        },
      );
      const data = await res.json();
      console.log(data);
      setData(data as APIList);
      setWorkspaces(data.data as Workspace[]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h3 className="m-4 text-2xl">My Workspaces</h3>
      <div className="flex flex-col gap-2 p-4">
        {workspaces && workspaces.length > 0 && workspaces.map(workspace => (
          <Card key={workspace.id}>
            <CardHeader>
              <CardTitle>{workspace.name}</CardTitle>
              <CardDescription>{workspace.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkspacePage;
