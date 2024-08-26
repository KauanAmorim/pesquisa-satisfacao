import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pergunta' })
export class Pergunta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'string' })
  pergunta: string;

  @Column({ type: 'boolean' })
  ativo: boolean;

  @Column({ type: 'boolean' })
  obrigatorio: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
