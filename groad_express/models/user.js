const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            first_name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {}
};