import InvalidUuidError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';
import {v4 as uuidv4, validate as uuidValidate } from 'uuid';

describe ("Unique EntityId Unit Tests", () => {
  it('shoul throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate" )
    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError)
    expect(validateSpy).toHaveBeenCalled();
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate" )
    const uuid = "bf31ce92-c79a-4b5e-aeb3-413329afd816"
    const vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate" )
    const uuid = "bf31ce92-c79a-4b5e-aeb3-413329afd816"
    const vo = new UniqueEntityId(uuid)
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  })
})