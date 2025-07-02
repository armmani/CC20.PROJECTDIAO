
# deVet Clinical System

## Entity-Relationship Diagram

The system contains the following main entities:

- **Users**
- **Pets**
- **Owners**
- **Visits**
- **Procedures**
- **Medications**
- **Visit Medications**
- **Visit Procedures**

## Database Tables Overview

### 1. `users`
- `email`, `password`, `role`
- Timestamps

### 2. `owners`
- `owner_name`, `tel_number`, `line_id`, `address`

### 3. `pets`
- Linked to an owner
- `pet_name`, `species`, `breed`, `birth_date`, `status`

### 4. `visits`
Stores clinical visit information.
- Linked to a user and a pet
- `cc`, `hx`, `pe`, `weight`, and `cost`

### 5. `procedures`
Standardized list of procedures performed during visits.
- `name`, `description`, `cost`

### 6. `medications`
Standardized medication list.
- `name`, `type`, `unit`, `cost`

### 7. `visit-medications`
Join table that connects visits with medications used.
- dosage, frequency, quantity, cost, and notes

### 8. `visit-procedures`
Join table for procedures performed during a visit.
- Links to a visit, procedure, and optionally medication
- quantity, unit, cost, and notes

## Future Development Tables
- `appointments`
- `medication_stock`

---

# API Endpoints for ProjectDiao

## Auth

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | /auth/login      | Login                   |
| POST   | /auth/register   | Register new user       |

## Users

| Method | Endpoint     | Description         |
|--------|--------------|---------------------|
| GET    | /users       | Get all users       |
| GET    | /users/:id   | Get user by ID      |
| POST   | /users       | Create new user     |
| PATCH    | /users/:id   | Update user         |

## Owners

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | /owners        | Get all owners      |
| GET    | /owners/:id    | Get owner by ID     |
| POST   | /owners        | Create new owner    |
| PATCH  | /owners/:id    | Update owner        |

## Pets

| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| GET    | /pets                     | Get all pets           |
| GET    | /pets/:id                 | Get pet by ID          |
| POST   | /pets                     | Create new pet         |
| PATCH  | /pets/:id                 | Update pet             |
| GET    | /owners/:ownerId/pets     | Get pets by owner      |

## Visits

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /visits        | Get all visits        |
| GET    | /visits/:id    | Get visit by ID       |
| POST   | /visits        | Create new visit      |
| PATCH  | /visits/:id    | Update visit          |

## Medications

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | /medications       | Get all medications   |
| GET    | /medications/:id   | Get medication by ID  |
| POST   | /medications       | Add new medication    |
| PUT    | /medications/:id   | Update medication     |
| DELETE | /medications/:id   | Delete medication     |

## Procedures

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /procedures        | Get all procedures  |
| GET    | /procedures/:id    | Get procedure by ID |
| POST   | /procedures        | Add new procedure   |
| PATCH  | /procedures/:id    | Update procedure    |
| DELETE | /procedures/:id    | Delete procedure    |

## Visit-Medications

| Method | Endpoint                       | Description                          |
|--------|--------------------------------|--------------------------------------|
| GET    | /visits/:visitId/medications   | Get all medications for a visit     |
| POST   | /visits/:visitId/medications   | Add medication to a visit           |
| PATCH  | /visit-medications/:id         | Update medication record on a visit |
| DELETE | /visit-medications/:id         | Remove medication from a visit      |

## Visit-Procedures

| Method | Endpoint                        | Description                           |
|--------|----------------------------------|---------------------------------------|
| GET    | /visits/:visitId/procedures     | Get all procedures for a visit       |
| POST   | /visits/:visitId/procedures     | Add procedure to a visit             |
| PATCH  | /visit-procedures/:id           | Update procedure record on a visit   |
| DELETE | /visit-procedures/:id           | Remove procedure from a visit        |
