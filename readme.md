
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

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :---| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/auth/login** | `post` | - | - | - | `{email, password}` | Login |
|[x]| **/auth/register** | `post` | - | - | - | `{email, password, role}` | Register new user |

## Users

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/users** | `get` | y | - | - | - | Get all users |
|[x]| **/users/:id** | `get` | y | `:id` | - | - | Get user by ID |
|[x]| **/users** | `post` | y | - | - | `{email, password, role}` | Create new user |
|[x]| **/users/:id** | `patch` | y | `:id` | - | `{email?, password?, role?}` | Update user |

## Owners

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/owners** | `get` | y | - | - | - | Get all owners |
|[x]| **/owners/:id** | `get` | y | `:id` | - | - | Get owner by ID |
|[x]| **/owners** | `post` | y | - | - | `{owner_name, tel_number, ...}` | Create new owner |
|[x]| **/owners/:id** | `patch` | y | `:id` | - | `{owner_name?, tel_number?, ...}` | Update owner |

## Pets

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/pets** | `get` | y | - | - | - | Get all pets |
|[x]| **/pets/:id** | `get` | y | `:id` | - | - | Get pet by ID |
|[x]| **/pets** | `post` | y | - | - | `{pet_name, species, ownerId, ...}` | Create new pet |
|[x]| **/pets/:id** | `patch` | y | `:id` | - | `{pet_name?, status?, ...}` | Update pet |
|[x]| **/owners/:ownerId/pets** | `get` | y | `:ownerId` | - | - | Get pets by owner |

## Visits

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/visits** | `get` | y | - | - | - | Get all visits |
|[x]| **/visits/:id** | `get` | y | `:id` | - | - | Get visit by ID |
|[x]| **/visits** | `post` | y | - | - | `{cc, hx, pe, dx, petId, userId, ...}` | Create new visit |
|[x]| **/visits/:id** | `patch` | y | `:id` | - | `{cc?, hx?, pe?, dx?, ...}` | Update visit |

## Medications

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/medications** | `get` | y | - | - | - | Get all medications |
|[x]| **/medications/:id** | `get` | y | `:id` | - | - | Get medication by ID |
|[x]| **/medications** | `post` | y | - | - | `{name, type, unit, cost}` | Add new medication |
|[x]| **/medications/:id** | `patch` | y | `:id` | - | `{name, type, unit, cost}` | Update medication |
|[x]| **/medications/:id** | `delete` | y | `:id` | - | - | Delete medication |

## Procedures

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/procedures** | `get` | y | - | - | - | Get all procedures |
|[x]| **/procedures/:id** | `get` | y | `:id` | - | - | Get procedure by ID |
|[x]| **/procedures** | `post` | y | - | - | `{name, description, cost}` | Add new procedure |
|[x]| **/procedures/:id** | `patch` | y | `:id` | - | `{name?, description?, cost?}` | Update procedure |
|[x]| **/procedures/:id** | `delete` | y | `:id` | - | - | Delete procedure |

## Visit-Medications

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/visits/:visitId/medications** | `get` | y | `:visitId` | - | - | Get all medications for a visit |
|[x]| **/visits/:visitId/medications** | `post` | y | `:visitId` | - | `{medicationId, dosage, ...}`| Add medication to a visit |
|[x]| **/visit-medications/:id** | `patch` | y | `:id` | - | `{dosage?, quantity?, ...}` | Update medication record on a visit |
|[x]| **/visit-medications/:id** | `delete` | y | `:id` | - | - | Remove medication from a visit |

## Visit-Procedures

|DONE| Path | Method | Authen | Params | Query | Body | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|[x]| **/visits/:visitId/procedures** | `get` | y | `:visitId` | - | - | Get all procedures for a visit |
|[x]| **/visits/:visitId/procedures** | `post` | y | `:visitId` | - | `{procedureId, quantity, ...}` | Add procedure to a visit |
|[x]| **/visit-procedures/:id** | `patch` | y | `:id` | - | `{quantity?, unit?, ...}` | Update procedure record on a visit |
|[x]| **/visit-procedures/:id** | `delete` | y | `:id` | - | - | Remove procedure from a visit |
