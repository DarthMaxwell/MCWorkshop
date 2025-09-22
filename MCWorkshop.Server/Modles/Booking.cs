namespace MCWorkshop.Server.Modles {
    public class Booking {
        public int Id {  get; set; } // will need for database and auto inc
        public string Name { get; set; }
        public string Email {  get; set; }
        public string Phone { get; set; }
        public string Bike { get; set; }
        public string Km { get; set; }
        public string Details { get; set; }
        public DateOnly Date { get; set; }

        public Booking(string name, string email, string phone, string bike, string km, string details, DateOnly date) {
            Name = name;
            Email = email;
            Phone = phone;
            Bike = bike;
            Km = km;
            Details = details;
            Date = date;
        }
    }
}
