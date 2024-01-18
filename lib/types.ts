export interface APIList {
  pageIndex: number;
  pageSize: number;
  count: number;
  data:
    | Workspace[]
    | Project[]
    | Client[]
    | Contact[]
    | Invoice[]
    | Receipt[]
    | Estimate[];
}

export interface Workspace {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  workspaceUserMappings: null;
  appUserId: string;
}

export interface Project {}

export interface Client {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImageUrl: string;
  workspaceId: string;
  contactId: null;
  workspace: null;
  contact: null;
}

export interface Contact {}

export interface Invoice {}

interface Receipt {}

interface Estimate {}
