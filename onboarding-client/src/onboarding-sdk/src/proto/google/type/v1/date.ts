/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: google/type/v1/date.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.type.v1 {
    export class Date extends pb_1.Message {
        constructor(data?: any[] | {
            year?: number;
            month?: number;
            day?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("year" in data && data.year != undefined) {
                    this.year = data.year;
                }
                if ("month" in data && data.month != undefined) {
                    this.month = data.month;
                }
                if ("day" in data && data.day != undefined) {
                    this.day = data.day;
                }
            }
        }
        get year() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set year(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get month() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set month(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get day() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set day(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            year?: number;
            month?: number;
            day?: number;
        }) {
            const message = new Date({});
            if (data.year != null) {
                message.year = data.year;
            }
            if (data.month != null) {
                message.month = data.month;
            }
            if (data.day != null) {
                message.day = data.day;
            }
            return message;
        }
        toObject() {
            const data: {
                year?: number;
                month?: number;
                day?: number;
            } = {};
            if (this.year != null) {
                data.year = this.year;
            }
            if (this.month != null) {
                data.month = this.month;
            }
            if (this.day != null) {
                data.day = this.day;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.year !== undefined)
                writer.writeInt32(1, this.year);
            if (this.month !== undefined)
                writer.writeInt32(2, this.month);
            if (this.day !== undefined)
                writer.writeInt32(3, this.day);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Date {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Date();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.year = reader.readInt32();
                        break;
                    case 2:
                        message.month = reader.readInt32();
                        break;
                    case 3:
                        message.day = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Date {
            return Date.deserialize(bytes);
        }
    }
}
