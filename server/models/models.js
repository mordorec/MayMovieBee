const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Actor = sequelize.define('actor',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    height: {type: DataTypes.DECIMAL(3,2), allowNull: false},
    birth: {type: DataTypes.DATEONLY, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    country_id: {type: DataTypes.INTEGER, allowNull: false},
    town: {type: DataTypes.TEXT, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Movie = sequelize.define('movie',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    rating: {type: DataTypes.DECIMAL(3,2)},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    director_id: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    year: {type: DataTypes.INTEGER, allowNull: false},
    genre_id: {type: DataTypes.INTEGER, allowNull: false},
    country_id: {type: DataTypes.INTEGER, allowNull: false},
    tagline: {type: DataTypes.TEXT},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Trailer = sequelize.define('trailer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    url: {type: DataTypes.TEXT, unique: true, allowNull: false},
    movie_id: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.TEXT, unique: true, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Genre = sequelize.define('genre',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, unique: true, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Country = sequelize.define('country',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, unique: true, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Director = sequelize.define('director',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    height: {type: DataTypes.DECIMAL(3,2), allowNull: false},
    birth: {type: DataTypes.DATEONLY, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    country_id: {type: DataTypes.INTEGER, allowNull: false},
    town: {type: DataTypes.TEXT, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Premiere = sequelize.define('premiere',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    movie_id: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const MovieActor = sequelize.define('movieactor',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    movie_id: { type: DataTypes.INTEGER, allowNull: false },
    actor_id: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Award = sequelize.define('award',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    award_name: {type: DataTypes.TEXT, allowNull: false},
    category: {type: DataTypes.TEXT, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    winner_type: {type: DataTypes.TEXT, allowNull: false},
    winner_id: {type: DataTypes.INTEGER, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})


const Festival = sequelize.define('festival',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    short_description: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    long_description: {type: DataTypes.TEXT, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const Articles = sequelize.define('articles',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    short_description: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    long_description: {type: DataTypes.TEXT, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const News = sequelize.define('news',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.TEXT, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const List = sequelize.define('list', {
    id: {type: DataTypes.INTEGER, primaryKey: true,allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.TEXT, unique: true, allowNull: false},
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

const MovieList = sequelize.define('movielist',{
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    movie_id: { type: DataTypes.INTEGER, allowNull: false },
    list_id: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
})

Country.hasMany(Actor)
Actor.belongsTo(Country)

Country.hasMany(Director)
Director.belongsTo(Country)

Actor.hasMany(Award)
Award.belongsTo(Actor)

Director.hasMany(Award)
Award.belongsTo(Director)

Country.hasMany(Movie)
Movie.belongsTo(Country)

Movie.hasMany(Award)
Award.belongsTo(Movie)

Director.hasMany(Movie)
Movie.belongsTo(Director)

Genre.hasMany(Movie)
Movie.belongsTo(Genre)

Movie.hasMany(Trailer)
Trailer.belongsTo(Movie)

Movie.hasOne(Premiere)
Premiere.belongsTo(Movie)

// Movie.belongsToMany(List, {through: MovieList})
// List.belongsToMany(Movie, {through: MovieList})

List.belongsToMany(Movie, { through: MovieList, as: 'movies' });
Movie.belongsToMany(List, { through: MovieList, as: 'lists' });

Movie.belongsToMany(Actor, {through: MovieActor})
Actor.belongsToMany(Movie, {through: MovieActor})

module.exports = {
    Actor, 
    Movie, 
    MovieActor, 
    Premiere, 
    Trailer, 
    Genre,
    Country,
    Award,
    Director,
    Festival,
    News,
    Articles,
    User,
    List,
    MovieList
}