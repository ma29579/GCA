package de.gca1.onlineBoutique;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OnlineBoutiqueApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineBoutiqueApplication.class, args);
	}

	@Bean
	ApplicationRunner init(CatalogController catalogController) {
		return args -> {
			catalogController.getProducts();
		};
	}

}
