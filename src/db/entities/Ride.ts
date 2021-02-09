import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { RideStatus } from "../../types/enums";

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        "type": "text",
        "enum": [
            RideStatus.ACCEPTED,
            RideStatus.CANCELED,
            RideStatus.FINISHED,
            RideStatus.ONROUTE,
            RideStatus.REQUESTING
        ],
    })
    status: RideStatus;

    @Column({ "type": "text" })
    pickUpAddress: string;

    @Column({ "type": "double precision", "default": 0 })
    pickUpLat: number;

    @Column({ "type": "double precision", "default": 0 })
    pickUpLng: number;

    @Column({ "type": "string" })
    dropOffAddress: string;

    @Column({ "type": "double precision", "default": 0 })
    dropOffLat: number;

    @Column({ "type": "double precision", "default": 0 })
    dropOffLng: number;

    @Column({ "type": "double precision", "default": 0 })
    price: number;

    @Column({ "type": "text" })
    distance: string;

    @Column({ "type": "text" })
    duration: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Ride;
