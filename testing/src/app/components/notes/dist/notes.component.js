"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotesComponent = exports.notesArray = void 0;
var core_1 = require("@angular/core");
exports.notesArray = [
    {
        name: 'Abstract Algebra',
        desc: 'Covers "all" undergraduate algebra: Groups, Rings, Modules, Fields, Commutative algebra, Algebraic Number Theory, and Representation of finite groups. Special topics include Quiver Theory and Category theory. Includes basic preliminary chapter. Homological Algebra coming soon!',
        link: '././assets/pdfs/notes/EYNTKA_algebra.pdf'
    },
    {
        name: 'Differential Geometry',
        desc: 'Various properties of Topological and Smooth Manifolds, smooth maps, tangent maps and bundles, Rank-Nullity Theorem and consequences, Sard\'s Theorem and Transversality, Vector Bundles, Differential Forms and integration on Manifolds, Riemann Manifolds. Preliminaires include inverse and implicit function theorem and Partition of Unity',
        link: '././assets/pdfs/notes/EYNTKA_differential_geometry.pdf'
    },
    {
        name: 'Real Analysis',
        desc: 'Abstract and Lebesgue Measure, Measurable and Integrable functions, Signed Measures, Radon-Nikodyn Theorem and FTC, Banach and Hilbert Spaces, Topological Vector Spaces, Lebegue Space, Fourier Analysis, Distribution Theory, and Measure on Locally Compact Topological Groups. ',
        link: '././assets/pdfs/notes/EYNTKA_real_analysis.pdf'
    },
    {
        name: 'Complex Analysis',
        desc: 'Complex Numbers and Functions, Geometry of Complex Plane and Riemann Surface, Complex Differentiation, Power Series, Important Power Series, Analytic Functions, Analytic Continuation, Meromorphic funcitons, Complex Integration, and Residue Calculus. ',
        link: '././assets/pdfs/notes/EYNTKA_complex_analysis.pdf'
    },
    {
        name: 'Functional Analysis',
        desc: 'Banach Spaces, Hahn-Banach Extension Theorem, Hilbert Spaces, Normal and Self-Adjoint Operators, Positive Operators, Unitary Operators, Diagonalizability, Compact Operators and Freidholm Operators, Index, and Spectral Theory. Gelfand Duality coming soon!',
        link: '././assets/pdfs/notes/EYNTKA_functional_analysis.pdf'
    },
    {
        name: 'Logic',
        desc: 'First Order Language and Propositional Language, Deduction from Inference heavy and Axiom heavy approach, Soundness and Completeness, Compactness, Computability, Turing Machines, Godel\'s Incompleteness Theorem. ',
        link: '././assets/pdfs/notes/EYNTKA_logic.pdf'
    },
    {
        name: 'Point-Set Topology',
        desc: 'Definition and Property of Topologies, Continuity, Seperation and Countability Axioms, Subspace/Product/Quotient Topology, Weak Topology, Metric Spaces, Connectedness and Compactness, Urysohn Lemma and Consequences, Fundamental Group, Topological Group. Dimension Theory coming soon!',
        link: '././assets/pdfs/notes/EYNTKA_topology.pdf'
    },
    {
        name: 'Probability',
        desc: 'Motivation and Definitions, Distributions and Expected Value, Linearity of Expectations, Variance and Correlation, Law of Large Numbers, Cliques in Erdos Reyni Graphs, Exponential Inequalities, Gaussian Distribution. Markov Chains coming soon!',
        link: '././assets/pdfs/notes/EYNTKA_probability.pdf'
    },
];
var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.notes = exports.notesArray;
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.scss']
        })
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
