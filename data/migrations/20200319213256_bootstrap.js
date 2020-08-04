
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step').unsigned().notNullable();
        tbl.text('instruction').notNullable();
        tbl.integer('recipe_id').unsigned().notNullable()
            .references('id').inTable('recipes')
            .onUpdate('CASCADE').onDelete('RESTRICT')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('ingredient_id').unsigned().notNullable()
            .references('id').inTable('ingredients');
        tbl.integer('recipe_id').unsigned().notNullable()
            .references('id').inTable('recipes')
        tbl.primary(['ingredient_id', 'recipe_id'])
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
