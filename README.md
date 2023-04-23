# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## User Stories

A user should be able to see a list of restaurants that have been reviewed

A user should be able to create a restaurant listing

A user should be able to update a restaurant listing

A user should be able to delete a restaurant listing

A user should be able to see commnets (rants) on a restaurant

A user should be able to create a comment (rant) on a restaurant

A user should be able to update a comment (rant) on a restaurant

A user should be able to delete a comment (rant) on a restaurant

## App Endpoints

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)   |
