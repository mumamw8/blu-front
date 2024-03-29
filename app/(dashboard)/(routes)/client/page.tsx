"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APIList, Client } from "@/lib/types";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [data, setData] = useState<APIList>();
  const [clients, setClients] = useState<Client[]>();
  const myToke =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVwaWMiLCJuYW1laWQiOiI5ZGVjOThmOC0xYjMzLTQ2YzktYTFhMC0zY2UwYTU0YWY4NzQiLCJlbWFpbCI6InRoZXRlY2hlcGljQGdtYWlsLmNvbSIsIm5iZiI6MTcwNTMxMDA0NSwiZXhwIjoxNzA1OTE0ODQ1LCJpYXQiOjE3MDUzMTAwNDUsImlzcyI6Imh0dHBzOi8vYmx1YXBpLWR3d3pxc3BmNnEtdWMuYS5ydW4uYXBwIn0.bxVE61ue7pTw27VBWKK3iaMtO3Z8qp8BywiW3zeR369VwF8yt204zeqLVy-QdwGAaP_QF3D5HKlLMA-G6IeaPQ";

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://bluapi-dwwzqspf6q-uc.a.run.app/api/Client`,
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
      setClients(data.data as Client[]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h3 className="mt-4 mx-4 text-2xl">My Clients</h3>
      <div className="flex flex-col items-center md:flex-row gap-4 md:gap-4 p-4">
        {clients && clients.length > 0 && clients.map(client => (
          <Card className="w-[80%] md:w-[300px]" key={client.id}>
            <CardHeader>
              <CardTitle className="w-full flex justify-between">
                {client.name}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="uname" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription>{client.email}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ClientPage;
