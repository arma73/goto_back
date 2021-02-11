import {
    Entity,
    BaseEntity,
    ManyToOne,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column
} from "typeorm";
import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ "type": "text" })
    text: string;

    @ManyToOne(() => Chat, chat => chat.messages)
    chat: Chat;

    @ManyToOne(() => User, user => user.messages)
    user: User;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Message;
