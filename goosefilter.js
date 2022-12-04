const gooseFilter = (birds) => {
    const geese = ['African', 'Roman Tufted', 'Tolouse', 'Pilgrim', 'Steinbacher'];
    const birdsFiltered = birds.filter((bird) => !geese.includes(bird));
    return birdsFiltered;
}

