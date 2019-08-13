/**
 * copyright 2019 (C) ELAIYA
 *
 * created on: Aug, 2019
 * @author: Elaiya Raja E
 *
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * ---------------------------------------------------------
 * 1.0     | ELAIYA - 13-08-2019 | Initial Creation
 * ---------------------------------------------------------
 *
 */
export const resolvers = {
    Query: {
        get: (parent,{key},{redis})=> {
            try {
                return redis.get(key)
            } catch (e) {
                return null
            }
        }
    },
    Mutation: {
        set: async (parent, {key, value}, {redis}) => {
            try {
                await redis.set(key, value);
                return true
            } catch (error) {
                console.log(error);
                return false
            }
        }
    }
};
