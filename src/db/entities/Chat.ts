import {
    Entity,
    BaseEntity,
    OneToMany,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import Message from "./Message";

@Entity()
class Chat extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Message, message => message.chat)
    messages: Message[];

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Chat;
