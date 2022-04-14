package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cities")
public class City {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int city_id;
	
	@Column
	private  String city_name;
	
	@Column
	private  String state;
	
	@Column(name="pickup_availability")
	private  int pick_avl;
	
	/*@JsonIgnoreProperties("city_id")
	@OneToMany(mappedBy = "city_id",cascade = CascadeType.ALL )
    private Set<Booking> bookings;
	
	
	
	
	public Set<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(Set<Booking> bookings) {
		this.bookings = bookings;
		for(Booking b : bookings)
			b.setPickup_city_id(this);
	}*/


	
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}

	public City(int city_id, String city_name, String state, int pick_avl) {
		super();
		this.city_id = city_id;
		this.city_name = city_name;
		this.state = state;
		this.pick_avl = pick_avl;
	}

	public City(String city_name, String state, int pick_avl) {
		super();
		this.city_name = city_name;
		this.state = state;
		this.pick_avl = pick_avl;
	}

	public int getCity_id() {
		return city_id;
	}

	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPick_avl() {
		return pick_avl;
	}

	public void setPick_avl(int pick_avl) {
		this.pick_avl = pick_avl;
	}

	

}
