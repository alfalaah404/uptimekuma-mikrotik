
const { R } = require("redbean-node");

class MikroTikModel {

    /**
     * Create a new MikroTik entry
     * @param {string} ip - IP address of the MikroTik device
     * @param {string} username - Username for MikroTik
     * @param {string} password - Password for MikroTik
     * @returns {Promise<object>} - The created MikroTik object
     */
    static async createMikroTik(ip, username, password) {
        try {
            const mikroTik = R.dispense("mikrotik");
            mikroTik.ip = ip;
            mikroTik.username = username;
            mikroTik.password = password;
            mikroTik.created_at = R.isoDateTime();
            mikroTik.updated_at = R.isoDateTime();
            await R.store(mikroTik);
            return mikroTik;
        } catch (error) {
            console.error("Error creating MikroTik:", error);
            throw error;
        }
    }

    /**
     * Get a MikroTik entry by ID
     * @param {number} id - ID of the MikroTik entry
     * @returns {Promise<object>} - The MikroTik object
     */
    static async getMikroTikById(id) {
        try {
            return await R.load("mikrotik", id);
        } catch (error) {
            console.error("Error getting MikroTik by ID:", error);
            throw error;
        }
    }

    /**
     * Get all MikroTik entries
     * @returns {Promise<object[]>} - Array of MikroTik objects
     */
    static async getAllMikroTik() {
        try {
            return await R.findAll("mikrotik");
        } catch (error) {
            console.error("Error getting all MikroTik:", error);
            throw error;
        }
    }

    /**
     * Update a MikroTik entry
     * @param {number} id - ID of the MikroTik entry
     * @param {object} updateData - The data to update
     * @returns {Promise<object>} - The updated MikroTik object
     */
    static async updateMikroTik(id, updateData) {
        try {
            let mikroTik = await R.load("mikrotik", id);
            if (!mikroTik.id) {
                throw new Error("MikroTik not found");
            }

            mikroTik.import(updateData);
            mikroTik.updated_at = R.isoDateTime();
            await R.store(mikroTik);
            return mikroTik;
        } catch (error) {
            console.error("Error updating MikroTik:", error);
            throw error;
        }
    }

    /**
     * Delete a MikroTik entry
     * @param {number} id - ID of the MikroTik entry
     * @returns {Promise<void>}
     */
    static async deleteMikroTik(id) {
        try {
            let mikroTik = await R.load("mikrotik", id);
            if (!mikroTik.id) {
                throw new Error("MikroTik not found");
            }

            await R.trash(mikroTik);
        } catch (error) {
            console.error("Error deleting MikroTik:", error);
            throw error;
        }
    }
}

module.exports = MikroTikModel;
