namespace MCWorkshop.Server.Modles {
    public class Bike {
        public int Id { get; set; }
        public string Picture {  get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public int Km { get; set; }
        public string Des { get; set; }
        public decimal Price { get; set; }

        public Bike() { }
    }
}
