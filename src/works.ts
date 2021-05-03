export function pickAJob(option: number) {
    const jobs = {
        1: 'Engineer',
        2: 'Singer',
        3: 'Driver',
        4: 'Doctor',
        5: 'Developer',
    };
    return jobs[option];
}

export function pickACar(option: number) {
    const cars = {
        1: 'Toyota',
        2: 'Ford',
        3: 'Tesla',
        4: 'Mazda',
        5: 'Honda',
        6: 'Kia',
        7: 'Hiunday',
        8: 'Chevrolet',
        9: 'Nissan',
        0: 'BMW',
    };
    return cars[option];
}