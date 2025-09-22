namespace MCWorkshop.Server.Modles {
    public class DayAvailability {
        public string Date { get; set; }
        public string Availability { get; private set; } = "yellow";

        private int _bookingCount = 0;

        public int BookingCount {
            get => _bookingCount;
            set {
                _bookingCount = value;
                if (value > 4) {
                    Availability = "gray";
                } else {
                    Availability = "yellow";
                }
            }
        }

        public DayAvailability(string date) {
            Date = date;
        }
    }
}
