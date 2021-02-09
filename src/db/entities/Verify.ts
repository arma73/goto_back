import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { VerifyTarget } from "../../types/enums";

@Entity()
class Verify extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ "type": "text", enum: [VerifyTarget.EMAIL, VerifyTarget.PHONE] })
    target: VerifyTarget;

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
