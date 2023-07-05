import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface GameResultInterface {
  id?: string;
  result: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface GameResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  result?: string;
  organization_id?: string;
}
