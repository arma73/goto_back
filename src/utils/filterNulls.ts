import { NoNullFields } from "../types/custom";

// eslint-disable-next-line @typescript-eslint/ban-types
export const filterToNotNullObject = <T extends object>(
    instance: T
): NoNullFields<T> => {
    const keys = Object.keys(instance);
    // eslint-disable-next-line @typescript-eslint/ban-types
    const convertedObject: NoNullFields<T> | {} = {};

    keys.forEach(item => {
        if (instance[item] !== null) {
            convertedObject[item] = item;
        }
    });

    return convertedObject as NoNullFields<T>;
};
