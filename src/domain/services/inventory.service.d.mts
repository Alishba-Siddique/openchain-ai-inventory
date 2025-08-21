export declare class InventoryService {
    addItem(name: string, quantity: number, price: number): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        quantity: number;
        price: number;
    }, {}, {
        timestamps: true;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        quantity: number;
        price: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    listItems(): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        quantity: number;
        price: number;
    }, {}, {
        timestamps: true;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        quantity: number;
        price: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=inventory.service.d.mts.map