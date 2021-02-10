import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    BeforeInsert
} from "typeorm";
import { VerifyTarget } from "../../types/enums";
import User from "./User";

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

    @ManyToOne(type => User, user => user.verifications)
    user: User;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    @BeforeInsert()
    createKey(): void {
        if (this.target === VerifyTarget.PHONE) {
            this.key = Math.floor(Math.random() * 100000).toString();
        } else if (this.target === VerifyTarget.EMAIL) {
            this.key = Math.random()
                .toString(36)
                .substr(2);
        }
    }
}

export default Verify;
