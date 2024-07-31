//
//  MainViewController.swift
//  App
//
//  Created by Petrick on 16/07/24.
//

import UIKit
import Capacitor

class MainViewController: CAPBridgeViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        bridge?.webView?.scrollView.isScrollEnabled = false
    }
    
//    override func viewDidAppear(_ animated: Bool) {
//        super.viewDidAppear(animated)
//        
//        // Ensure the system updates the home indicator visibility
//        setNeedsUpdateOfHomeIndicatorAutoHidden()
//        setNeedsUpdateOfScreenEdgesDeferringSystemGestures()
//    }
//    
//    override var preferredScreenEdgesDeferringSystemGestures: UIRectEdge {
//        return .bottom
//    }
    
}
