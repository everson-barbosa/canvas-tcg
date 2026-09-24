
export enum AttackStatus {
  DECLARED,
  CANCELED,
  BLOCKED,
  RESOLVED
}

export interface Attack {
  id: string
  attackerId: string
  targetId: string
  status: AttackStatus
}

export type Attacks = Record<string, Attack>