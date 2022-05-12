/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: types/protectedvalue.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../google/type/date";
import * as pb_1 from "google-protobuf";
export namespace thebaasco.types {
    export class ProtectedString extends pb_1.Message {
        constructor(data?: any[] | ({} & (({
            clear?: string;
            protected?: never;
        } | {
            clear?: never;
            protected?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("clear" in data && data.clear != undefined) {
                    this.clear = data.clear;
                }
                if ("protected" in data && data.protected != undefined) {
                    this.protected = data.protected;
                }
            }
        }
        get clear() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set clear(value: string) {
            pb_1.Message.setOneofField(this, 1, [1, 2], value);
        }
        get protected() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set protected(value: string) {
            pb_1.Message.setOneofField(this, 2, [1, 2], value);
        }
        get value() {
            const cases: {
                [index: number]: "none" | "clear" | "protected";
            } = {
                0: "none",
                1: "clear",
                2: "protected"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            clear?: string;
            protected?: string;
        }) {
            const message = new ProtectedString({});
            if (data.clear != null) {
                message.clear = data.clear;
            }
            if (data.protected != null) {
                message.protected = data.protected;
            }
            return message;
        }
        toObject() {
            const data: {
                clear?: string;
                protected?: string;
            } = {};
            if (this.clear != null) {
                data.clear = this.clear;
            }
            if (this.protected != null) {
                data.protected = this.protected;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.clear === "string" && this.clear.length)
                writer.writeString(1, this.clear);
            if (typeof this.protected === "string" && this.protected.length)
                writer.writeString(2, this.protected);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProtectedString {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtectedString();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.clear = reader.readString();
                        break;
                    case 2:
                        message.protected = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProtectedString {
            return ProtectedString.deserialize(bytes);
        }
    }
    export class ProtectedDate extends pb_1.Message {
        constructor(data?: any[] | ({} & (({
            clear?: dependency_1.google.type.Date;
            protected?: never;
        } | {
            clear?: never;
            protected?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("clear" in data && data.clear != undefined) {
                    this.clear = data.clear;
                }
                if ("protected" in data && data.protected != undefined) {
                    this.protected = data.protected;
                }
            }
        }
        get clear() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.type.Date, 1) as dependency_1.google.type.Date;
        }
        set clear(value: dependency_1.google.type.Date) {
            pb_1.Message.setOneofWrapperField(this, 1, [1, 2], value);
        }
        get protected() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set protected(value: string) {
            pb_1.Message.setOneofField(this, 2, [1, 2], value);
        }
        get value() {
            const cases: {
                [index: number]: "none" | "clear" | "protected";
            } = {
                0: "none",
                1: "clear",
                2: "protected"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            clear?: ReturnType<typeof dependency_1.google.type.Date.prototype.toObject>;
            protected?: string;
        }) {
            const message = new ProtectedDate({});
            if (data.clear != null) {
                message.clear = dependency_1.google.type.Date.fromObject(data.clear);
            }
            if (data.protected != null) {
                message.protected = data.protected;
            }
            return message;
        }
        toObject() {
            const data: {
                clear?: ReturnType<typeof dependency_1.google.type.Date.prototype.toObject>;
                protected?: string;
            } = {};
            if (this.clear != null) {
                data.clear = this.clear.toObject();
            }
            if (this.protected != null) {
                data.protected = this.protected;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.clear !== undefined)
                writer.writeMessage(1, this.clear, () => this.clear.serialize(writer));
            if (typeof this.protected === "string" && this.protected.length)
                writer.writeString(2, this.protected);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProtectedDate {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProtectedDate();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.clear, () => message.clear = dependency_1.google.type.Date.deserialize(reader));
                        break;
                    case 2:
                        message.protected = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProtectedDate {
            return ProtectedDate.deserialize(bytes);
        }
    }
}
