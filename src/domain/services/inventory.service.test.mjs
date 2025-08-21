// src/domain/services/inventory.service.test.mts
import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { InventoryService } from './inventory.service.mjs';
import * as inventoryModel from '../models/inventory.model.mjs';
import { AppError } from '../../errors/app-error.mjs';
describe('InventoryService', () => {
    let service;
    beforeEach(() => {
        service = new InventoryService();
        jest.restoreAllMocks();
    });
    describe('addItem', () => {
        it('should throw AppError if input is missing', async () => {
            await expect(service.addItem('', 1, 10)).rejects.toThrow(AppError);
            await expect(service.addItem('Item', null, 10)).rejects.toThrow(AppError);
            await expect(service.addItem('Item', 1, null)).rejects.toThrow(AppError);
        });
        it('should call InventoryItem.create with correct parameters', async () => {
            const mockItem = { id: 1, name: 'Item', quantity: 1, price: 10 };
            const createSpy = jest.spyOn(inventoryModel.InventoryItem, 'create').mockResolvedValue(mockItem);
            const result = await service.addItem('Item', 1, 10);
            expect(createSpy).toHaveBeenCalledWith({
                name: 'Item',
                quantity: 1,
                price: 10,
            });
            expect(result).toEqual(mockItem);
        });
    });
    describe('listItems', () => {
        it('should call InventoryItem.find and return results', async () => {
            const mockItems = [
                { id: 1, name: 'Item1', quantity: 5, price: 10 },
                { id: 2, name: 'Item2', quantity: 2, price: 15 },
            ];
            const findSpy = jest.spyOn(inventoryModel.InventoryItem, 'find').mockResolvedValue(mockItems);
            const result = await service.listItems();
            expect(findSpy).toHaveBeenCalled();
            expect(result).toEqual(mockItems);
        });
    });
});
//# sourceMappingURL=inventory.service.test.mjs.map