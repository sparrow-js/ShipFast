CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_role INT,
    nickname VARCHAR(255),
    avatar_url VARCHAR(255),
    created_at timestamptz,
    uuid UUID UNIQUE NOT NULL
);


CREATE TABLE pages (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    llm_name VARCHAR(100),
    llm_params JSON,
    schema_data JSON,
    created_at timestamptz,
    update_at timestamptz,
    uuid UUID UNIQUE NOT NULL,
    status INT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_no VARCHAR(255) UNIQUE NOT NULL,
    identifier VARCHAR(255),
    created_at timestamptz,
    user_email VARCHAR(255) NOT NULL,
    expired_at timestamptz,
    order_status VARCHAR(20) NOT NULL,
    paied_at timestamptz,
    credits INT NOT NULL,
    used_credits: INT,
    customer_id INT,
    variant_id INT
);