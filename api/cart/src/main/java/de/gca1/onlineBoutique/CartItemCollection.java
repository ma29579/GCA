package de.gca1.onlineBoutique;

import java.util.ArrayList;
import java.util.HashSet;

public class CartItemCollection {

    private HashSet<Integer> productIDs;

    CartItemCollection(){
        productIDs = new HashSet<Integer>();
    }

    public boolean addProductID(int productID){
        return this.productIDs.add(Integer.valueOf(productID));
    }

    public HashSet<Integer> getProductIDs() {
        return productIDs;
    }
}
