namespace MCWorkshop.Server.Modles {
    public class Storage {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Plate { get; set; }
        public Boolean Pickup { get; set; }

        public string Year { get; set; } = DateTime.Today.Year.ToString();

        public Storage (string name, string phone, string plate, bool pickup) {
            Name = name;
            Phone = phone;
            Plate = plate;
            Pickup = pickup;
        }

        public Storage() { }
    }
}
