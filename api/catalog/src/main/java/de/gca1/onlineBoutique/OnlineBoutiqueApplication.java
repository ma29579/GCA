package de.gca1.onlineBoutique;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
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
