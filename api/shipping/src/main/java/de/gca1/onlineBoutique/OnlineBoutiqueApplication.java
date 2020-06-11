package de.gca1.onlineBoutique;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;


import java.util.Collections;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class OnlineBoutiqueApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineBoutiqueApplication.class, args);
	}

	@Bean
	ApplicationRunner init(ShippingController shippingController) {
		return args -> {
			//catalogController.getProducts();
		};
	}
	


}
