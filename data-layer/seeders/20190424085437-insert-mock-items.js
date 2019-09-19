const SEED_MOCK_DATA = process.env.SEED_MOCK_DATA === 'true';

const items = [
  {
    id: 'FOO-1234',
    name: 'Foo',
  },
  {
    id: 'BAR-5678',
    name: 'Bar',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return SEED_MOCK_DATA
      ? queryInterface.bulkInsert('Items', items, {})
      : Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    return SEED_MOCK_DATA
      ? queryInterface.bulkDelete(
          'Items',
          {
            id: { [Sequelize.Op.in]: items.map(item => item.id) },
          },
          {}
        )
      : Promise.resolve();
  },
};
