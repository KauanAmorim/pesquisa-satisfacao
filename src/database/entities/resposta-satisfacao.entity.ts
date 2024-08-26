import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pergunta_satisfacao' })
export class RespotaSatisfacao {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'string' })
  pergunta: string;

  @Column({ type: 'boolean' })
  ativo: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
