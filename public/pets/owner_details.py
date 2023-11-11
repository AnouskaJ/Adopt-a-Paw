import json
import random
import string

def generate_random_data():
    """Generate random OwnerName and OwnerContact data."""
    owner_names = ['John Doe', 'Jane Doe', 'Bob Smith', 'Alice Johnson', 'Charlie Brown']
    
    # Generate random OwnerName
    owner_name = random.choice(owner_names)
    
    # Generate random OwnerContact (assuming a simple phone number)
    owner_contact = ''.join(random.choices(string.digits, k=10))
    
    return {'OwnerName': owner_name, 'OwnerContact': owner_contact}

def update_json_data(json_data):
    """Update JSON data with random OwnerName and OwnerContact."""
    for pet in json_data:
        pet['OwnerName'], pet['OwnerContact'] = generate_random_data().values()
    
    return json_data

def main():
    input_file_path = 'pets_old.json'
    output_file_path = 'pets.json'

    with open(input_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    updated_data = update_json_data(data)

    with open(output_file_path, 'w', encoding='utf-8') as file:
        json.dump(updated_data, file, indent=2)

if __name__ == "__main__":
    main()
