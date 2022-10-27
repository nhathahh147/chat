import React from 'react'

const mesgs = [
	{
		name: "Nguyễn Văn A",
		date: "Dec 22",
		message: "Test, which is a new approach to have all solutions astrology under one roof.",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
	{
		name: "Nguyễn Văn B",
		date: "Dec 22",
		message: "Test, which is a new approach to have all solutions astrology under one roof.",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
	{
		name: "Nguyễn Văn C",
		date: "Dec 22",
		message: "Test, which is a new approach to have all solutions astrology under one roof.",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
];

const mesgsOut = [

	{
		date: "11:01 AM | June 9",
		message: "Test which is a new approach to have all solutions",
	},

	{
		date: "11:01 AM | Today",
		message: "Apollo University, Delhi, India Test",
	},

];

const mesgsIn = [
	{
		date: "11:01 AM | June 9",
		message: "Test which is a new approach to have all solutions",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
	{
		date: "11:01 AM | Yesterday",
		message: "Test, which is a new approach to have",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
	{
		date: "11:01 AM | Today",
		message: "We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.",
		img: "https://ptetutorials.com/images/user-profile.png",
	},
]

function Chat() {
	return (
		<div class="messaging">
			<div class="inbox_msg">
				<div class="inbox_people">
					<div class="headind_srch">
						<div class="recent_heading">
							<h4>Recent</h4>
						</div>
						<div class="srch_bar">
							<div class="stylish-input-group">
								<input type="text" class="search-bar" placeholder="Search" />
							</div>
						</div>
					</div>
					<div class="inbox_chat scroll">
						{
							mesgs.map((item, index) => (
								<div class="chat_list active_chat">
									<div class="chat_people">
										<div class="chat_img"> <img src={item.img} alt="sunil" /> </div>
										<div class="chat_ib">
											<h5>{item.name}<span class="chat_date">{item.date}</span></h5>
											<p>{item.message}</p>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div class="mesgs">
					<div class="msg_history">
						{
							mesgsIn.map((item, index) => (
								<div class="incoming_msg">
									<div class="incoming_msg_img"> <img src={item.img} alt="sunil" /> </div>
									<div class="received_msg">
										<div class="received_withd_msg">
											<p>{item.message}</p>
											<span class="time_date">{item.date}</span></div>
									</div>
								</div>
							))
						}
						{
							mesgsOut.map((item, index) => (
								<div class="outgoing_msg">
									<div class="sent_msg">
										<p>{item.message}</p>
										<span class="time_date">{item.date}</span> </div>
								</div>
							))
						}
					</div>

					<div class="type_msg">
						<div class="input_msg_write">
							<input type="text" class="write_msg" placeholder="Type a message" />
							<button class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat