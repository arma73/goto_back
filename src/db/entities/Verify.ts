import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
class Verify extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ "type": "text" })
    target: string;

    @Column({ "type": "text" })
    payload: string;

    @Column({ "type": "text" })
    key: string;

    @Column({ "type": "boolean", "default": false })
    used: boolean;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Verify;
