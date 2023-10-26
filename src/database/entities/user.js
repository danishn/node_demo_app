module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users',
        {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

            title: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
            first_name: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
            last_name: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
            email: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
            mobile: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
            password: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
            role_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
            is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
        },
        {
            initialAutoIncrement: 1000,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            freezeTableName: true,
            tableName: 'users'
        }
    )

    return User
}