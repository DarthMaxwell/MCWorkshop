function StorageForm() {
    // datavalidationa and POST

    return (
        <div className="StorageForm">
            <form>
                <input placeholder="Name" />
                <input placeholder="Number" />
                <input placeholder="Plate Number" />
                <label>Do you want us to pick up the bike(extra cost)</label>
                <input type="checkbox" />
                <button type="submit">Book your spot</button>
            </form>
        </div>
  );
}

export default StorageForm;