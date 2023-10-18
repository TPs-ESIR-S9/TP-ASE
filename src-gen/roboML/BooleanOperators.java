/**
 */
package roboML;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>Boolean Operators</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see roboML.RoboMLPackage#getBooleanOperators()
 * @model
 * @generated
 */
public enum BooleanOperators implements Enumerator {
	/**
	 * The '<em><b>Inferior</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #INFERIOR_VALUE
	 * @generated
	 * @ordered
	 */
	INFERIOR(0, "Inferior", "Inferior"),

	/**
	 * The '<em><b>Inferior Eq</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #INFERIOR_EQ_VALUE
	 * @generated
	 * @ordered
	 */
	INFERIOR_EQ(1, "InferiorEq", "InferiorEq"),

	/**
	 * The '<em><b>Equals</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #EQUALS_VALUE
	 * @generated
	 * @ordered
	 */
	EQUALS(2, "Equals", "Equals"),

	/**
	 * The '<em><b>Superior</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SUPERIOR_VALUE
	 * @generated
	 * @ordered
	 */
	SUPERIOR(3, "Superior", "Superior"),

	/**
	 * The '<em><b>Superior Eq</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SUPERIOR_EQ_VALUE
	 * @generated
	 * @ordered
	 */
	SUPERIOR_EQ(4, "SuperiorEq", "SuperiorEq"),

	/**
	 * The '<em><b>Different</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #DIFFERENT_VALUE
	 * @generated
	 * @ordered
	 */
	DIFFERENT(5, "Different", "Different"),

	/**
	 * The '<em><b>And</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #AND_VALUE
	 * @generated
	 * @ordered
	 */
	AND(6, "And", "And"),

	/**
	 * The '<em><b>Or</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #OR_VALUE
	 * @generated
	 * @ordered
	 */
	OR(7, "Or", "Or");

	/**
	 * The '<em><b>Inferior</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #INFERIOR
	 * @model name="Inferior"
	 * @generated
	 * @ordered
	 */
	public static final int INFERIOR_VALUE = 0;

	/**
	 * The '<em><b>Inferior Eq</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #INFERIOR_EQ
	 * @model name="InferiorEq"
	 * @generated
	 * @ordered
	 */
	public static final int INFERIOR_EQ_VALUE = 1;

	/**
	 * The '<em><b>Equals</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #EQUALS
	 * @model name="Equals"
	 * @generated
	 * @ordered
	 */
	public static final int EQUALS_VALUE = 2;

	/**
	 * The '<em><b>Superior</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SUPERIOR
	 * @model name="Superior"
	 * @generated
	 * @ordered
	 */
	public static final int SUPERIOR_VALUE = 3;

	/**
	 * The '<em><b>Superior Eq</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SUPERIOR_EQ
	 * @model name="SuperiorEq"
	 * @generated
	 * @ordered
	 */
	public static final int SUPERIOR_EQ_VALUE = 4;

	/**
	 * The '<em><b>Different</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #DIFFERENT
	 * @model name="Different"
	 * @generated
	 * @ordered
	 */
	public static final int DIFFERENT_VALUE = 5;

	/**
	 * The '<em><b>And</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #AND
	 * @model name="And"
	 * @generated
	 * @ordered
	 */
	public static final int AND_VALUE = 6;

	/**
	 * The '<em><b>Or</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #OR
	 * @model name="Or"
	 * @generated
	 * @ordered
	 */
	public static final int OR_VALUE = 7;

	/**
	 * An array of all the '<em><b>Boolean Operators</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final BooleanOperators[] VALUES_ARRAY = new BooleanOperators[] { INFERIOR, INFERIOR_EQ, EQUALS,
			SUPERIOR, SUPERIOR_EQ, DIFFERENT, AND, OR, };

	/**
	 * A public read-only list of all the '<em><b>Boolean Operators</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final List<BooleanOperators> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

	/**
	 * Returns the '<em><b>Boolean Operators</b></em>' literal with the specified literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param literal the literal.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static BooleanOperators get(String literal) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			BooleanOperators result = VALUES_ARRAY[i];
			if (result.toString().equals(literal)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Boolean Operators</b></em>' literal with the specified name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param name the name.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static BooleanOperators getByName(String name) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			BooleanOperators result = VALUES_ARRAY[i];
			if (result.getName().equals(name)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Boolean Operators</b></em>' literal with the specified integer value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the integer value.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static BooleanOperators get(int value) {
		switch (value) {
		case INFERIOR_VALUE:
			return INFERIOR;
		case INFERIOR_EQ_VALUE:
			return INFERIOR_EQ;
		case EQUALS_VALUE:
			return EQUALS;
		case SUPERIOR_VALUE:
			return SUPERIOR;
		case SUPERIOR_EQ_VALUE:
			return SUPERIOR_EQ;
		case DIFFERENT_VALUE:
			return DIFFERENT;
		case AND_VALUE:
			return AND;
		case OR_VALUE:
			return OR;
		}
		return null;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final int value;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String name;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String literal;

	/**
	 * Only this class can construct instances.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private BooleanOperators(int value, String name, String literal) {
		this.value = value;
		this.name = name;
		this.literal = literal;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int getValue() {
		return value;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getLiteral() {
		return literal;
	}

	/**
	 * Returns the literal value of the enumerator, which is its string representation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		return literal;
	}

} //BooleanOperators
